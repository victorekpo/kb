obj={victor:true}
set={}
set[JSON.stringify(obj)]=true
console.log(set)

String.prototype.hashCode = function(){
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var character = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
str="Victor"
console.log(str.hashCode())
