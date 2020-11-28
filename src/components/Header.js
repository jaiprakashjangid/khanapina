import React from 'react'

const Header = (props) => {
    const {search, onInputChange}=props;

    function lach(){
        var val = document.getElementById("txt").value;
        console.log(val);
    }

    return (
        <div className="jumbtron">
            <h1 className="display-1">            
            <span class="material-icons brand-icon">fastfood</span> FOOD RECIPES
            </h1>
            <div class="input-group w-50 mx-auto" >
                <form >
                    <input type="text" class="form-control" id="txt" placeholder="Search your recipe...." value={search} onChange={onInputChange}/>
                </form>
                <div class="input-group-append">
                   <button type="button" className="btn btn-dark" onClick="lach()" >Search Menu</button>
                </div>
                
            </div>
        </div>
        
    )
}

export default Header;
