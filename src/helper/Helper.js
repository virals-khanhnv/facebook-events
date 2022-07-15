import moment from 'moment';

export function getUnique(arr, comp) {

    const unique = arr
      .map(e => e[comp])
  
      .map((e, i, final) => final.indexOf(e) === i && i)
  
      .filter(e => arr[e]).map(e => arr[e]);
  
    return unique;
}

export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export const formatDateTime = (time) => {
  return moment(time).format( 'HH:mm DD-MM-YYYY')
}

export function search(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].name === nameKey) {
          return myArray[i];
      }
  }
}

export function removeItem(sKey, sPath, sDomain) {
  document.cookie = encodeURIComponent(sKey) + 
  "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + 
  (sDomain ? "; domain=" + sDomain : "") + 
  (sPath ? "; path=" + sPath : "");
}


export function removeOldView (classForchange, nameForRemove) {
  document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
    element.classList?.remove(nameForRemove);
  });
}


export function changeViewMode (viewmode, classForchange) {
  if(viewmode == 0) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode__widget");
    });
    removeOldView(classForchange,'viewMode__list')
  }else if(viewmode == 1) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode__list");
    });
  }
}
