
var stringUtils = {
  reverse: function(str) {
    return str;
  },
  encode: function(str, key) {
    //1.For every key
    var result ='';
    var ind = 0,len = key.length;
    for(var i = 0; i < str.length;i++) {
      result +=  str[i];
      result +=  key[ind++];
      if(ind == len){
        ind = 0; 
      }
    }

    //2.for every 2 char append key length
    //3. do something
    return result;
}
,
decode: function(str, key) {
  var result = '';
  var ind = 0, len = key.length;
  for(var i = 0; i < str.length; i++){
    result += str[i++];
    if(str[i] != key[ind++]){
      return '';
    }
    if(ind == key.length) {
        ind = 0;
    }
  }
  //remove len every 2 char
  //3. ur imgination

  return result;

},
  search: function(sourceString, searchStr) {
    
  }
};

//use secretKey for encoding and decoding
var secretKey = 'abc123';

function reverse() {
  var sourceStrElement = document.getElementById('str1');
  var result = stringUtils.reverse(sourceStrElement.value);
  var reverseElement = document.getElementById('reverseResult');
  reverseElement.innerHTML = result;
}
function encode() {
  var sourceStrElement = document.getElementById('str1');
  var result = stringUtils.encode(sourceStrElement.value, secretKey);
  var encodeElement = document.getElementById('encodeResult');
  encodeElement.innerHTML = result;
}
function decode() {
  var sourceStrElement = document.getElementById('str1');
  var result = stringUtils.decode(sourceStrElement.value, secretKey);
  var decodeElement = document.getElementById('decodeResult');
  decodeElement.innerHTML = result;
}

function search() {
  var sourceStrElement = document.getElementById('str1');
  var searchStrElement = document.getElementById('searchFor');
  var result = stringUtils.search(sourceStrElement.value, searchStrElement.value);
  var searchResultElement = document.getElementById('searchResult');
  searchResultElement.innerHTML = result;
}