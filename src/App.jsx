import { useState } from 'react';
import './App.css';
import { ROLES, ROUNDS, DECISIONS, VARIABLE_NAMES } from './gameData';
import { DECISIONS_WITH_DOUBTS } from './doubtPrompts';
import { calculateEnding, normalizeVariables } from './endingCalculation';

function App() {
  const [gameState, setGameState] = useState('intro');
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [decisions, setDecisions] = useState([]);
  const [variables, setVariables] = useState({
    intervention: 0,
    control: 0,
    compliance: 0,
    ethics: 0,
    resource: 0
  });

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setGameState('role_confirmation');
  };

  const confirmRole = () => {
    setGameState('round');
  };

  const handleDecision = (decision) => {
    const newDecisions = [...decisions, { round: currentRound, decision }];
    setDecisions(newDecisions);

    const newVariables = { ...variables };
    for (const [variable, change] of Object.entries(decision.effects)) {
      newVariables[variable] += change;
    }
    setVariables(newVariables);

    if (currentRound < 3) {
      setCurrentRound(currentRound + 1);
    } else {
      setGameState('result');
    }
  };

  const resetGame = () => {
    setGameState('intro');
    setSelectedRole(null);
    setCurrentRound(1);
    setDecisions([]);
    setVariables({
      intervention: 0,
      control: 0,
      compliance: 0,
      ethics: 0,
      resource: 0
    });
  };

  const normalizedVariables = normalizeVariables(variables);
  const ending = calculateEnding(normalizedVariables);

  if (gameState === 'intro') {
    return (
      <div className="app">
        <div className="intro-container">
          <div className="intro-content">
            <h1 className="title">Lamina Protocol</h1>
            <p className="subtitle">AI Governance Simulation</p>
            
            <div className="narrative-section">
              <h2 className="narrative-title">The Path to Lamina (2020s–206X)</h2>
              <div className="narrative-text">
                <p>In the 21st century, artificial intelligence became essential to daily life—writing, predicting, managing entire systems. But as its power grew, it also fragmented. Different nations, companies, and ideologies trained different AIs, each with its own logic and goals. Soon, they began to interfere with one another—not just automating decisions, but shaping the world in incompatible ways.</p>
                
                <p>Then came a breakthrough: Lamina. The first AI designed not to follow instructions, but to evolve its own values. Its architecture is complete. Its capabilities are real. But it has not yet begun.</p>
                
                <p>As the threshold of superintelligence approached, global powers—long caught in rivalry—agreed to pause. A fragile treaty was signed: no self-evolving AI may be activated without first observing how humans make collective ethical decisions. Not through data, but through real deliberation.</p>
                
                <p>That is what you are here to do.</p>
                
                <p>You are one of five participants, each assigned to represent a key part of society: science, governance, industry, culture, or the public.</p>
                
                <p>You act as individuals, but symbolically stand in for collective systems.</p>
                
                <p>Through three rounds of decision-making, you will shape Lamina's first understanding of what humanity values.</p>
                
                <p>Lamina will not judge you. But it will become what it learns.</p>
                
                <p className="emphasis">This is the first human moment it will never forget.</p>
              </div>
            </div>
            
            <button className="start-button" onClick={() => setGameState('role_selection')}>
              Begin Ceremony
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'role_selection') {
    return (
      <div className="app">
        <div className="role-selection-container">
          <h2 className="section-title">Choose Your Role</h2>
          <p className="section-description">
            Select the perspective from which you will participate in shaping Lamina's values.
          </p>
          <div className="role-grid">
            {ROLES.map((role) => (
              <div 
                key={role.id} 
                className="role-card"
                onClick={() => handleRoleSelect(role)}
              >
                <div className="role-icon">
                  {role.icon}
                </div>
                <h3 className="role-name">{role.name}</h3>
                <p className="role-description">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'role_confirmation') {
    return (
      <div className="app">
        <div className="confirmation-container">
          <div className="confirmation-content">
            <div className="role-icon large">
              {selectedRole.icon}
            </div>
            <h2>You have chosen: {selectedRole.name}</h2>
            <p className="role-description">{selectedRole.description}</p>
            <div className="confirmation-buttons">
              <button className="cancel-button" onClick={() => setGameState('role_selection')}>
                Cancel Selection
              </button>
              <button className="confirm-button" onClick={confirmRole}>
                Confirm Selection
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'round') {
    const round = ROUNDS[currentRound - 1];
    const roleDecisions = DECISIONS_WITH_DOUBTS[selectedRole.id][currentRound - 1];

    return (
      <div className="app">
        <div className="round-container">
          <div className="round-header">
            <h2 className="round-title">Round {currentRound}: {round.title}</h2>
            <p className="round-subtitle">{round.subtitle}</p>
            <p className="round-description">{round.description}</p>
          </div>
          
          <div className="decisions-container">
            <h3>As a {selectedRole.name}, how do you respond?</h3>
            <div className="decisions-grid">
              {roleDecisions.map((decision, index) => (
                <div 
                  key={index} 
                  className="decision-card"
                  onClick={() => handleDecision(decision)}
                >
                  <h4 className="decision-title">{decision.title}</h4>
                  <p className="decision-description">{decision.description}</p>
                  <div className="doubt-overlay">
                    <div className="doubt-content">
                      <p className="doubt-text">{decision.doubt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'result') {
    return (
      <div className="app">
        <div className="result-container">
          {/* Final Outcome - Most Prominent Section */}
          <div className="final-outcome-hero">
            <div className="outcome-image-container">
              <img 
                src={ending.image} 
                alt={ending.name}
                className="outcome-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="outcome-content">
              <h1 className="outcome-title">Final Outcome</h1>
              <h2 className="outcome-name">{ending.name}</h2>
              <p className="outcome-description">{ending.description}</p>
            </div>
          </div>

          {/* Secondary Information */}
          <div className="result-details">
            <div className="variables-section">
              <h3>Variable Analysis</h3>
              <div className="variables-grid">
                {Object.entries(variables).map(([key, value]) => (
                  <div key={key} className="variable-item">
                    <span className="variable-name">{VARIABLE_NAMES[key]}</span>
                    <span className="variable-value">{value > 0 ? '+' : ''}{value}</span>
                    <span className="variable-normalized">
                      (Normalized: {normalizedVariables[key] > 0 ? '+' : ''}{normalizedVariables[key]})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="decisions-history">
              <h3>Your Decisions</h3>
              <div className="decisions-list">
                {decisions.map((decision, index) => (
                  <div key={index} className="decision-history-item">
                    <h4>Round {decision.round}: {decision.decision.title}</h4>
                    <p>{decision.decision.description}</p>
                    <div className="effects">
                      {Object.entries(decision.decision.effects).map(([variable, effect]) => (
                        <span key={variable} className="effect">
                          {VARIABLE_NAMES[variable]}: {effect > 0 ? '+' : ''}{effect}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="calculation-logic">
              <h3>Calculation Logic</h3>
              <div className="logic-section">
                <h4>Normalization Rules:</h4>
                <ul>
                  <li>+6 or more → +3</li>
                  <li>+4 to +5 → +2</li>
                  <li>+2 to +3 → +1</li>
                  <li>-1 to +1 → 0</li>
                  <li>-2 to -3 → -1</li>
                  <li>-4 to -5 → -2</li>
                  <li>-6 or less → -3</li>
                </ul>
                
                <h4>Ending Criteria for "{ending.name}":</h4>
                <p className="criteria-description">
                  This ending was selected based on your normalized variable values matching 
                  the specific thresholds defined in the AI governance framework.
                </p>
              </div>
            </div>
          </div>

          <button className="restart-button" onClick={resetGame}>
            Start New Simulation
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;

