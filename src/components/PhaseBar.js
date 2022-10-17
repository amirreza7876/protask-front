import React from 'react';

function PhaseBar({phases, changePhase, selectedPhase}) {
	return (
		<div
			className={'flex gap-2 mt-3 overflow-x-auto py-2 mr-3 rounded text-gray-600'}>
			{phases.length !== 0 ?
				phases.map(phase => (
					<button key={phase.id}
							onClick={() => changePhase(phase.id)}
							className={`flex-shrink-0 text-gray-600 cursor-pointer px-4 py-2 hover:bg-slate-300 hover:text-gray-800 rounded-lg 
								${selectedPhase.id === phase.id && 'bg-slate-200'} flex`}>
						<p>
							{phase.name}
						</p>
					</button>
				)) :
				null
			}
		</div>
	);
}

export default PhaseBar;