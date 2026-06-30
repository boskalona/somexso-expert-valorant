const agents = require('../data/agents');
const maps = require('../data/maps');
const weapons = require('../data/weapons');
const guides = require('../data/guides');

function home(req, res) {
  const featuredAgents = agents.filter(a => ['jett','sage','reyna','omen','sova'].includes(a.id));
  res.render('home', { agents: featuredAgents, maps: maps.slice(0,4), guides, weapons });
}

function agentsPage(req, res) {
  const role = req.query.role || 'All';
  const roles = ['All', ...new Set(agents.map(a => a.role))];
  const filtered = role === 'All' ? agents : agents.filter(a => a.role === role);
  res.render('agents', { agents: filtered, allAgents: agents, roles, role });
}

function agentDetail(req, res) {
  const agent = agents.find(a => a.id === req.params.id);
  if (!agent) return res.redirect('/agents');
  const others = agents.filter(a => a.id !== agent.id).slice(0, 4);
  res.render('agent-detail', { agent, others });
}

function mapsPage(req, res) {
  res.render('maps', { maps });
}

function mapDetail(req, res) {
  const map = maps.find(m => m.id === req.params.id);
  if (!map) return res.redirect('/maps');
  res.render('map-detail', { map, maps });
}

function weaponsPage(req, res) {
  const type = req.query.type || 'All';
  const types = ['All', ...new Set(weapons.map(w => w.type))];
  const filtered = type === 'All' ? weapons : weapons.filter(w => w.type === type);
  res.render('weapons', { weapons: filtered, allWeapons: weapons, types, type });
}

function guidesPage(req, res) {
  res.render('guides', { guides });
}

function guideDetail(req, res) {
  const guide = guides.find(g => g.id === req.params.id);
  if (!guide) return res.redirect('/guides');
  const others = guides.filter(g => g.id !== guide.id);
  res.render('guide-detail', { guide, others });
}

module.exports = { home, agentsPage, agentDetail, mapsPage, mapDetail, weaponsPage, guidesPage, guideDetail };
