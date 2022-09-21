
import React, { useEffect } from "react";
import AddReview from "./AddReviews";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./AddReview.css";
import { FaCheck } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
import {
	addReview,
	clearStateReviews,
	getReviews,
	getTodosUsuarios,
} from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav";

export default function UserReview({user}) {

/* 	const user = {
		name: "Romi Jimenez",
		id: "105104a9-9e18-4934-b950-18de117aa014",
		standupId: "6c5dc9cc-460c-408c-8cb8-cfa94af873ec",
		lastname: "Jimenez",
		email: "romijimenez06@gmail.comimage",
		category: "ta",
		active: true,
	};
 */

	const { id } = useParams();

	const users = useSelector((state) => state.users.users);
	const reviews = useSelector(state=> state.reviews.reviews)

	const dispatch = useDispatch();


	let ta = ''
	if (user.category) {
		ta = users.filter((e) => e.name === user.name );
   }else{
	 ta = users.filter((e) => e.name === user._json.name );
	 }
const idTa = ta.map(e=> e.id).toString()
const nameTa = ta.map(e=> e.name).toString()



	const labels = {
		1: "Useless+",
		2: "Poor+",
		3: "Ok+",
		4: "Good+",
		5: "Excellent+",
	};

	useEffect(() => {
		dispatch(getTodosUsuarios());
		dispatch(getReviews())
		return () => {
			dispatch(clearStateReviews());
		};
	}, []);
	function getLabelText(value) {
		return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
	}

	const [value, setValue] = useState({
		rating: 0,
		comments: "",
		taId: idTa,
		userId: id
	});

	
	const [hover, setHover] = useState(-1);
	

	function handleChange(e) {
		setValue({
			...value,
			[e.target.name]: e.target.value,
		});
		
	}

	function handleSelect(e) {
		setValue({
			taId: e.target.value,
		});
	}


	const reviewsExistente = reviews.find(e => e.userId === value.userId)
	function handleSubmit(e) {
		if(reviewsExistente){
			setValue({
				rating: 0,
				comments: "",
				taId: "",
				userId: id
			});
			return alert('El usuario ya tiene su review')
		}
		
			dispatch(addReview(id, value));
			setValue({
				rating: 0,
				comments: "",
				taId: "",
				userId: id
			});
			alert('La review se ha creado correctamente')
	}

	return (
		<div>
			<AddReview user={user} />
			<div>
				<form onSubmit={handleSubmit}>
					{/* <select onChange={(e) => handleSelect(e)}>
						<option value={""}>TA</option>
						{users &&
							users.map((e) => {
								if (e.standupId === user.standupId && e.category === "ta")
									return (
										<option name={e.id} value={e.id}>
											{e.name}
										</option>
									);
							})}
					</select> */}
				
					<Box
						sx={{
							width: 200,
							display: "flex",
							alignItems: "center",
						}}
					>
						<Rating
							name={"rating"}
							value={value.rating}
							precision={1}
							getLabelText={getLabelText}
							onChange={handleChange}
							onChangeActive={(event, newHover) => {
								setHover(newHover);
							}}
							// emptyIcon={
							// 	<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
							// }
						/>
						{value !== null && (
							<Box sx={{ ml: 2 }}>
								{labels[hover !== -1 ? hover : value.rating]}
							</Box>
						)}
					</Box>

					<textarea
						name={"comments"}
						value={value.comments}
						onChange={handleChange}
						wrap="hard"
						required
						placeholder={"Deje un comentario sobre el estudiante"}
						style={{
							border: "1px solid black",
							width: "400px",
							height: "200px",
							resize: "none",
						}}
					></textarea>
					<button
						style={{ display: "flex", color: "green" }}
						type="submit"
						disabled={value == "0" ? true : false}
					>
						<FaCheck />
					</button>
					<button style={{ display: "flex", color: "red" }} type="submit">
						<TiDelete />
					</button>
				</form>
			</div>
		</div>
	);
}