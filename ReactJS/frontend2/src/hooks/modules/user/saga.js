import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// Conexão api
import api from '../../../services/api';

// Ações disponiveis
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
   try {
      const { nome } = payload.data;
      const profile = {
         nome,
      };
      const response = yield call(api.put, 'users', profile);

      toast.success('Perfil atualizado com sucesso!');

      yield put(updateProfileSuccess(response.data));
   } catch (err) {
      toast.error('Erro ao atualizar perfil, confira seus dados!');
      yield put(updateProfileFailure());
   }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
