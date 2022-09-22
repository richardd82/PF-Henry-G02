import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getAllLessons,
  getAllModules,
  clearState,
  clearStateLessons,
  getAllVideos,
  getTodosUsuarios,
} from '../../redux/actions/index';
import Contact from '../../components/Contact/Contact';
// Assets
import github from '../../media/github.png';
import sheet from '../../media/sheet.png';
import './Module.css';
import Nav from '../../components/Nav/Nav';


const Module = ({ user }) => {
  const dispatch = useDispatch();
  const lessons = useSelector(state => state.classes.lessons);
  const videos = useSelector(state=> state.videos.allVideos)
  const modules = useSelector(state => state.modules.modules);
  const users = useSelector(state => state.users.allUsers)

 // const videoClass = 
  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
    dispatch(getAllVideos());
    dispatch(getTodosUsuarios())
    return () => {
      dispatch(clearStateLessons());
    };
  }, [dispatch]);

  let logged = ''
  if (!user.category) {
    logged = users.filter((e) => e.name === user._json.name );
 }else{
  logged = users.filter((e) => e.name === user.name );
   }

const cohortMaped = lessons.map(e => e.cohortId)
const cohortVideos = videos.map(v => v.cohortId )
const cohortUser = logged.map(e=> e.cohortId)
const lecture = videos.filter(v=> v.type === 'lecture')



  return (
    <>
      <Nav user={user} />
      <div className="moduleContainer c__cards">
        {modules &&
          modules.map((module, index) => {
            if (window.location.pathname === `/module/${module.id}`) {

              return lessons
              .sort((a, b) => {
                const aDate = new Date(a.createdAt);
                const bDate = new Date(b.createdAt);
                return aDate - bDate;
                })
                .map((obj, index) => {
                  if (obj.moduleId === module.id) {
                    const lectureType = lecture.filter(e=>e.classId === obj.id)
                    const filtered = lectureType.map(e => e.id)
                    console.log(filtered);
                    return (
                      <div key={index} className="section__modulo-clases">
                        <article>
                          <Link key={obj.id} to={`/lecture/${filtered}`}>
                            <p>{`${obj.name}`}</p>
                            <div>
                              <img src={github} alt="github" />
                              <img src={sheet} alt="sheet" />
                            </div>
                            <h5>See lessons</h5>
                          </Link>
                        </article>
                      </div>
                    );
                  } else {
                    return null;
                  }
                });
            }
            return '';
          })}
      </div>
    </>
  );
};

export default Module;
