import React from "react";
import { useDispatch } from "react-redux";




const VerReviews =() =>{
    const dispatch = useDispatch()
    const cohortsExistentes = useSelector((state) => state.cohorts.allCohorts);

    useEffect(() => {
        dispatch(getCohorts());
      }, [dispatch]);

    const handleSelect = (e) => {
        e.preventDefault(e);
        setInput({
          ...input,
          cohortId: e.target.value,
        });
      };

    return(
        <>
        <select className="select" onChange={handleSelect}>
              <option> Select cohort</option>
              {cohortsExistentes?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
        </>
    )
}