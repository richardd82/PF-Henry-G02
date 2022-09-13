import React, { useEffect } from "react";
import rocket from "../../../assets/media/rocket.png";
import { useDispatch, useSelector } from 'react-redux';
import { clearStateModules, getAllLessons, getAllModules } from '../../../redux/actions/index';
import SearchBar from '../../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const DasboardStudent = () => {
	const modules = useSelector((state) => state.modules.modules);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllModules());
		dispatch(getAllLessons());
		return () => dispatch(clearStateModules());
	}, [dispatch]);

	const handleClick = () => {
		dispatch(getAllLessons());
		dispatch(getAllModules());
	};
	return (
		<div>
			{" "}
			<nav className="nav__links">
				<ul>
					{modules
						.sort((a, b) => {
							const aDate = new Date(a.createdAt);
							const bDate = new Date(b.createdAt);
							return aDate - bDate;
						})
						.map((obj, index) => {
							return (
								<li key={index}>
									<Link
										onClick={() => handleClick()}
										key={index}
										to={`/module/${obj.id}`}
									>
										<section className="sectiom__title-modulo">
											<h1>{obj.name}</h1>
										</section>
									</Link>
								</li>
							);
						})}
					<img className="nav__rocket" src={rocket} alt="" />
				</ul>

				{/* </ul> */}
				<div>
					<SearchBar />
				</div>
				{/* <div className="search">
<input className="search-Input" type="text"  placeholder="Buscar..."/>
<Link to="/" className="link-Search"><img className="icon-Search" src={lupa} alt=""/></Link>
</div> */}
			</nav>
		</div>
	);
};

export default DasboardStudent;
