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

export function changeViewMode (viewmode, classForchange, columns) {
  if(viewmode == 0) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode__widget");
      element.classList?.remove("viewMode__list", "viewMode__grid", "viewMode__slider", "viewMode_upCommingEvent", "viewMode_FacebookEventsView");
    });
  }else if(viewmode == 1) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode__list");
      element.classList?.remove("viewMode__widget", "viewMode__grid", "viewMode__slider", "viewMode_upCommingEvent", "viewMode_FacebookEventsView");
    });
  } else if (viewmode == 2) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode__grid");
      element.classList?.remove("viewMode__widget", "viewMode__list", "viewMode__slider", "viewMode_upCommingEvent", "viewMode_FacebookEventsView");
      if (columns == 1) {
        element.classList?.remove("viewMode__grid_column_4");
        element.classList?.remove("viewMode__grid_column_2");
        element.classList?.remove("viewMode__grid_column_3");
      }else if (columns == 2) {
        element.classList?.add("viewMode__grid_column_2");
        element.classList?.remove("viewMode__grid_column_4");
        element.classList?.remove("viewMode__grid_column_3");
      } else if (columns == 3) {
        element.classList?.add("viewMode__grid_column_3");
        element.classList?.remove("viewMode__grid_column_2");
        element.classList?.remove("viewMode__grid_column_4");
      } else if(columns == 4){
        element.classList?.add("viewMode__grid_column_4");
        element.classList?.remove("viewMode__grid_column_3");
        element.classList?.remove("viewMode__grid_column_2");
      }
    });
  } else if (viewmode == 3) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode__slider");
      element.classList?.remove("viewMode__widget", "viewMode__list", "viewMode__grid", "viewMode_upCommingEvent", "viewMode_FacebookEventsView");
    });
  } else if (viewmode == 4) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode_upCommingEvent");
      element.classList?.remove("viewMode__widget", "viewMode__list", "viewMode__grid", "viewMode__slider", "viewMode_FacebookEventsView");
    });
  } else if (viewmode == 5) {
    document.querySelectorAll(`.${classForchange}`)?.forEach(function(element) {
      element.classList?.add("viewMode_FacebookEventsView");
      element.classList?.remove("viewMode__widget", "viewMode__list", "viewMode__grid", "viewMode_upCommingEvent", "viewMode__slider");
    });
  }
}

