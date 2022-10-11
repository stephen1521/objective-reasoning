// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(user){
    return user.userRole === 'ADMIN';
}

function getEmail(user){
    return user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase() + '@codeimmersives.com';
}

function getPlaylistLength(playlist){
    return playlist.songs.length;
}

function getHardestHomework(arr){
    if(arr.length < 1){
        return '';
    }
    let min = 100;
    for(let i of arr){
        min = Math.min(min, i.averageScore);
    }
    for(let i of arr){
        if(i.averageScore === min){
            return i.name;
        }
    }
}

function createPhonebook(arrName, arrNum){
    let phoneBook ={};
    if(arrName.length < 1){
        return phoneBook;
    }
    for(let i = 0; i < arrName.length; i++){
        phoneBook[arrName[i]] = arrNum[i];
    }
    return phoneBook;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};