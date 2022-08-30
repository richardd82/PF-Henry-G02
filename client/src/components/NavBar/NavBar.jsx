import "./NavBar.css"


const user = {
    id: 1,
    name: "Kelly"
}



export default function NavBar(){

    function redirectToProfile(){
        window.location.href= `/profile/${user.name}`;
        }

    function redirectBootcamp(){
        window.location.href="/Bootcamp";
        }

    function redirectToCatalog(){
        window.location.href="/Catalog";
        }

    return  <div>
                
                    <button className="button-profile" name="Profile" onClick={redirectToProfile}>Profile</button>
                
               
                    <button className="button-bootcamp" name="Bootcamp" onClick={redirectBootcamp}>Bootcamp</button>
               
                
                    <button className="button-catalog" name="Catalog" onClick={redirectToCatalog}>Catalog</button>
                
    </div>
    
    

}