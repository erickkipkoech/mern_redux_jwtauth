const Header=()=>{
    return(
        <>
        
		<nav className="main_nav header scrolled ">
			<div className="container">
				<div className="row">
					<div className="col">
						
						<div className="main_nav_content d-flex flex-row">

							{/* <!-- Categories Menu --> */}

							{/* <!-- Main Nav Menu --> */}

							<div className="main_nav_menu">
								<ul className="standard_dropdown main_nav_dropdown">
									<li><a href="#">Home<i className="fas fa-chevron-down"></i></a></li>
									<li className="hassubs">
										<a href="#">Collection<i className="fas fa-chevron-down"></i></a>
										<ul>
											<li>
												<a href="#">Collections<i className="fas fa-chevron-down"></i></a>
											</li>
										</ul>
									</li>
									<li className="hassubs">
										<a href="#">About us<i className="fas fa-chevron-down"></i></a>
									</li>
									<li><a href="contact.html">Contact<i className="fas fa-chevron-down"></i></a></li>
								</ul>
							</div>

							{/* <!-- Menu Trigger --> */}

							<div className="menu_trigger_container ml-auto">
								<div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
									<div className="menu_burger">
										<div className="cat_burger menu_burger_inner"><span></span><span></span><span></span></div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</nav>
        </>
    )
}

export default Header;