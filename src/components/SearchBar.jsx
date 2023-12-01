const SearchBar = () => {
    return(
        <div class="search-bar">
        <div class="search-bar-form">

            <div class="search-form search-side">
                <form id="searchform" method="get" action="https://emmanuel.tv/">
                    <input class="search-input" placeholder="Search..." type="text" value="" name="s" id="s" />
                    <input class="search-submit" type="submit" value="" />
                </form>
            </div>
        </div>
    </div>
    )
}

export default SearchBar;