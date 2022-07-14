import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_DINO } from "../utils/queries";
// import ReactionList from "../components/ReactionList";
// import ReactionForm from "../components/ReactionForm";
import Auth from "../utils/auth";

const SingleDino = (props) => {
    const { id: dinoId } = useParams();

    const { loading, data } = useQuery(QUERY_DINO, {
        variables: { id: dinoId },
    });

    const dino = data?.dino || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <div className="card mb-3">
            <p className="card-header">
            <span style={{ fontWeight: 700 }} className="text-light">
                {dino.name}
            </span>{" "}
            </p>
            <div className="card-body">
            <p>{dino.bio}</p>
            {/* <SelectedDino selectedDino={currentDino} likedDinos={props.likedDinos} setLikedDinos={props.setLikedDinos}/> */}
            </div>
        </div>

        {/* {thought.reactionCount > 0 && (
            <ReactionList reactions={thought.reactions} />
        )} */}
        {/* {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
        </div>
    );
};

export default SingleDino;
