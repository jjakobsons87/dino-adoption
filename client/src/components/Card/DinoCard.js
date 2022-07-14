import React, { useState } from "react";
import SelectedDino from "../SelectedDino";
import { useQuery } from "@apollo/client";
import { QUERY_DINOS, QUERY_DINO } from "../../../src/utils/queries";

import {
    CCard,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
} from "@coreui/react";

export default function DinoCard() {
    const [currentDino, setCurrentDino] = useState();

    const { loading, error, data } = useQuery(QUERY_DINOS);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
            {dinos &&
                dinos.map((dino, key) => (
                    <SelectedDino key={key} dino={dino} />
                ))}
        </div>
    );
}
