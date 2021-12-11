import { takeLatest, call, put } from 'redux-saga/effects'
import ProjectService from '../../../../services/projects'
import { Project } from '../../../../models/Project'
import { ADD_PROJECT, ADD_PROJECT_SUCCESS, ADD_PROJECT_FAILED } from '..'

function* createProject({ payload, meta }) {
  try {
    yield put({ type: 'START_LOADING' })
    const project = new Project()
    const projectStatus = payload.status ? 1 : 0

    project.ownerId = payload.ownerId
    project.favorite = false
    project.name = payload.name
    project.status = projectStatus
    project.image = payload.image
    project.owner_image = payload.owner_image

    const id = yield call(ProjectService.create, project)

    if (id == null) yield put({ type: ADD_PROJECT_FAILED, error: 'Error try again later', meta })

    yield put({ type: ADD_PROJECT_SUCCESS, payload: project, meta })
  } catch ({ message }) {
    yield put({ type: USER_CREATED_FAILED, error: message, meta })
  } finally {
    yield put({ type: 'STOP_LOADING' })
  }
}

const projectSagas = [takeLatest(ADD_PROJECT, createProject)]

export default projectSagas
