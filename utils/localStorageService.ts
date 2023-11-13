export const setLocalStorage = ( name: any,param:any ) => {
  localStorage.setItem( name,param )
}
export const getLoacalStorage = ( name: any ) => {
  localStorage.getItem( name )
}
export const clearLoacalStorage = () => {
  localStorage.clear()
}