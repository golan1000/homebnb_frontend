<<<<<<< HEAD
import { storageService } from './async-storage-service.js'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
=======
import { storageService } from './async-storage-service.js';
import gUsers from '../../data/user.json';
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';
const STORAGE_KEY_USER = 'user';
>>>>>>> 384cee6ee6bc0244db56bfd82ce4509f5577deee
// var gWatchedUser = null;

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getById,
  remove,
  update,
}

// Debug technique
// window.userService = userService

// _createUsers();

async function getById(userId) {
<<<<<<< HEAD
  const user = await storageService.get('user', userId)
  // const user = await httpService.get(`user/${userId}`)
  gWatchedUser = user
  return user
}
function remove(userId) {
  return storageService.remove('user', userId)
=======
  const user = await storageService.get(STORAGE_KEY_USER, userId);
  // const user = await httpService.get(`user/${userId}`)
  // gWatchedUser = user;
  // const user = gUsers.find(user => user._id === userId);

  return user;
}
function remove(userId) {
  return storageService.remove(STORAGE_KEY_USER, userId);
>>>>>>> 384cee6ee6bc0244db56bfd82ce4509f5577deee
  // return httpService.delete(`user/${userId}`)
}

async function update(user) {
<<<<<<< HEAD
  await storageService.put('user', user)
=======
  await storageService.put(STORAGE_KEY_USER, user);
>>>>>>> 384cee6ee6bc0244db56bfd82ce4509f5577deee
  // user = await httpService.put(`user/${user._id}`, user)
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
  return user
}

async function login(userCred) {
<<<<<<< HEAD
  const users = await storageService.query('user')
  const user = users.find((user) => user.username === userCred.username)
  return _saveLocalUser(user)
=======
  const users = await storageService.query(STORAGE_KEY_USER);
  const user = users.find(
    user =>
      user.username === userCred.username && user.password === userCred.password
  );
  if (!user) return console.error('No such user');
  return _saveLocalUser(user);
>>>>>>> 384cee6ee6bc0244db56bfd82ce4509f5577deee

  // const user = await httpService.post('auth/login', userCred)
  // socketService.emit('set-user-socket', user._id);
  // if (user) return _saveLocalUser(user)
}
<<<<<<< HEAD
async function signup(userCred) {
  const user = await storageService.post('user', userCred)
=======
async function signup(userInfo) {
  if (!userInfo.fullname || !userInfo.username || !userInfo.password) {
    return console.error('some details are missing', userInfo);
  }
  const newUser = {
    'fullname': userInfo.fullname,
    'imgUrl': 'https://robohash.org/59985?set=set1',
    'username': userInfo.username,
    'password': userInfo.password,
  };
  // gUsers.push(JSON.parse(JSON.stringify(newUser)));
  // console.log('gUsers', gUsers);
  const user = await storageService.post(STORAGE_KEY_USER, newUser);
  delete user.password;
>>>>>>> 384cee6ee6bc0244db56bfd82ce4509f5577deee
  // const user = await httpService.post('auth/signup', userCred)
  // socketService.emit('set-user-socket', user._id);
  return _saveLocalUser(user)
}
async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  // socketService.emit('unset-user-socket');
  // return await httpService.post('auth/logout')
}

function _saveLocalUser(user) {
<<<<<<< HEAD
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
=======
  delete user.password;
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
>>>>>>> 384cee6ee6bc0244db56bfd82ce4509f5577deee
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

async function _createUsers() {
  var users = (await storageService.query(STORAGE_KEY_USER)) || [];
  if (!users || !users.length) {
    users = gUsers;
    storageService._save(STORAGE_KEY_USER, users);
  }
  storageService._save(STORAGE_KEY_USER, users);
}

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();
