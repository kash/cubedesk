import type {TranslationDictionary} from '../../types';

const messages: TranslationDictionary = {
	'sessions.createFailed': 'Error del servidor: no se pudo crear la sesión',
	'sessions.demoSession': 'Sesión de demostración',
	'sessions.demoPuzzleSession': 'Sesión de demostración de {puzzle}',
	'sessions.mergeConfirmTitle': 'Fusionar sesiones',
	'sessions.mergeConfirmDescription':
		'Vas a fusionar «{source}» con «{target}». «{source}» se eliminará después de la fusión.',
	'sessions.mergeConfirmButton': 'Fusionar sesiones',
	'sessions.actionsFor': 'Acciones de {name}',
	'sessions.reorder': 'Reordenar {name}',
	'sessions.untitledSession': 'Sesión sin título',
	'sessions.loadError': 'No se pudieron cargar las sesiones existentes.',
	'sessions.created': 'Creada',
	'sessions.solveTimesChart': 'Tiempos en orden cronológico',
	'sessions.timeDistributionChart': 'Número de tiempos completados en cada intervalo',
	'sessions.session': 'Sesión',
	'sessions.selectSession': 'Seleccionar sesión',
	'sessions.importDemoSolves': '¿Importar tiempos de demostración?',
	'sessions.importIntoSession': 'Importar a la sesión',
	'sessions.makeCurrent': 'Establecer como actual',
	'sessions.mergeSession': 'Combinar sesión',
	'sessions.sessions': 'Sesiones',
	'sessions.createASession': 'Crear una sesión',
	'sessions.createNewSession': 'Crear una sesión nueva',
	'sessions.organizationHint':
		'En CubeDesk, las sesiones pueden incluir varios tipos de cubo. Puedes organizarlas como prefieras: por tipo de cubo, por día, etc.',
	'sessions.deleteSession': 'Borrar sesión',
	'sessions.deleteWarning':
		'Ten cuidado. Estás a punto de borrar «{name}». Esta acción es irreversible.',
	'sessions.successfullyDeletedSession': 'La sesión «{name}» se ha borrado correctamente.',
	'sessions.yourSessions': 'Tus sesiones',
	'sessions.chartDescription':
		'Resoluciones completadas, de más antiguas a más recientes · Agrupadas para sesiones largas',
	'sessions.solvesPerSession': 'Resoluciones por sesión',
	'sessions.newSession': 'Nueva sesión',
	'sessions.sessionName': 'Nombre de la sesión',
	'sessions.sessionName2': 'Nombre de la sesión',
	'sessions.newSession2': 'Nueva sesión',
	'sessions.youCanChangeThisLater': 'Puedes cambiarlo más adelante.',
	'sessions.createSession': 'Crear sesión',
	'sessions.saveToDefaultPrompt': 'Guarda estas resoluciones en tu sesión predeterminada.',
	'sessions.loadingSessions': 'Cargando sesiones…',
	'sessions.createSessionPrompt': 'Crea una sesión para empezar a organizar tus tiempos.',
};

export default messages;
