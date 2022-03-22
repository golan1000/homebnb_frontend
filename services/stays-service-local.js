import { storageService } from '../bkup/async-storage.service.js'

const KEY = 'stayDB'

export const todoService = {
  query,
  getById,
  remove,
  save,
  getEmptyStay,
}

// TODO: support paging and filtering and sorting
function query() {
  return storageService.query(KEY)
}

function getById(id) {
  return storageService.get(KEY, id)
}

function remove(id) {
  return storageService.remove(KEY, id)
}

function save(stay) {
  // const todoToSave = JSON.parse(JSON.stringify(todo))
  const prm = stay._id
    ? storageService.put(KEY, stay)
    : storageService.post(KEY, stay)
  return prm
}

function getEmptyStay() {
  return {
    _id: '',
  }
}
