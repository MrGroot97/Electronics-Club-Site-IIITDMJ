const CLIENT_ID ='118678477435-44bb5d3i1afuve50r0cf87pfrsn49139.apps.googleusercontent.com';
const API_KEY='AIzaSyBNNgaVH1Elzs7jbKg3ocZoifVkJ3QSNX0';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';
const defaultKeyword ="Electronics Club";
console.log("chutiya");

function handleClientLoad() {
       gapi.load('client:auth2', initClient);
     }
function initClient() {
      gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    }).then(function () {
        getData(defaultKeyword);
        });
     }
function getData(defaultKeyword){
   console.log(defaultKeyword);
   console.log("chutiya");
}
