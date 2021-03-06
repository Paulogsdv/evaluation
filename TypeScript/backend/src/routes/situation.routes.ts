import { Router } from 'express';

import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middleware/ensureAuthenticated';
import Situation from '../models/Situation';
import UpdateSituationService from '../services/UpdateSituationService';

const situationRoutes = Router();

situationRoutes.use(ensureAuthenticated);

situationRoutes.get('/', async (req, res) => {
   const situationRepository = getRepository(Situation);

   const situations = await situationRepository.find({ where: { active: true }, order: { id: 'ASC' } });

   return res.json(situations);
});

situationRoutes.put('/', async (req, res) => {
   const updateSituationService = new UpdateSituationService();

   const { situations } = req.body;

   const result = await updateSituationService.excetute({ situations });

   res.json(result);
});

export default situationRoutes;
