
## Categories

curl -X "GET" "https://api.spotify.com/v1/browse/categories?country=ES" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQC-5pU1IZ26e_Zb2UHfF05Y0R8OlqE56WwG0r-IZlw55Mvb16fe4_BZ6WDzYI8Wv0mZX9ZafAMyT95Yvp-NbhD8M8SwpowOejHsWlOmPrRD5n3JoYisE2c2cy4KHXQahbTLy778"

## Playlist Categories

curl -X "GET" "https://api.spotify.com/v1/browse/categories/rock/playlists?country=ES" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQC-5pU1IZ26e_Zb2UHfF05Y0R8OlqE56WwG0r-IZlw55Mvb16fe4_BZ6WDzYI8Wv0mZX9ZafAMyT95Yvp-NbhD8M8SwpowOejHsWlOmPrRD5n3JoYisE2c2cy4KHXQahbTLy778"

## Login

https://accounts.spotify.com/api/token
Authorization Basic {{client_credentials}}// id_client:id_client_secret
body: grant_type : 'client_credential'
