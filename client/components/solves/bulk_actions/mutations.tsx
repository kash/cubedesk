import {gql} from '@apollo/client';

export const DELETE_SOLVES_MUT = gql`
    mutation Mutate($solveIds: [String]) {
        bulkDeleteSolves(solveIds: $solveIds)
    }
`;

export const BULK_CHANGE_SOLVES_SESSION_MUT = gql`
    mutation Mutate($sessionId: String, $solveIds: [String]) {
        bulkMoveSolvesToSession(sessionId: $sessionId, solveIds: $solveIds)
    }
`;

export const BULK_UPDATE_SOLVES_EVENT_MUT = gql`
    mutation Mutate($cubeType: String, $solveIds: [String]) {
        bulkUpdateSolvesCubeType(cubeType: $cubeType, solveIds: $solveIds)
    }
`;

export const BULK_PLUS_TWO_SOLVES_MUT = gql`
    mutation Mutate($solveIds: [String]) {
        bulkPlusTwoSolves(solveIds: $solveIds)
    }
`;

export const BULK_DNF_SOLVES_MUT = gql`
    mutation Mutate($solveIds: [String]) {
        bulkDnfSolves(solveIds: $solveIds)
    }
`;

export const BULK_OK_SOLVES_MUT = gql`
    mutation Mutate($solveIds: [String]) {
        bulkOkSolves(solveIds: $solveIds)
    }
`;
