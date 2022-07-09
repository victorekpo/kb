let myvar;
const getvar = () => {
	setTimeout(()=> {myvar =123},000)
}
const getall = () => {
	return myvar}
module.exports  ={ myvar, getall, getvar }
