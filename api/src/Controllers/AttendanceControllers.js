const { Attendance, Users } = require('../db.js');

const createAttendance = async (req, res, next) => {
  try {
    const { students, cohortId, classId, standupId } = req.body;
    students.forEach(async student => {
      await Attendance.create({
        attendance: true,
        usersId: student.id,
        cohortId,
        classId,
        standupId,
      });
    });
    res.send('Asistencias creadas exitosamente');
  } catch (error) {
    next(error);
  }
};

const getAttendances = async (req, res, next) => {
  const { standupId, cohortId, classId} = req.query;

  console.log(req.body);
  try {
    let attendances = await Attendance.findAll({
          where: {
            standupId,
            cohortId,
            classId
          },
        })
    res.json(attendances);
  } catch (error) {
    next(error);
  }
};

const getAllAttendance = async (req, res, next) => {
  try {
    let asistencia = await Attendance.findAll()
    res.json(asistencia)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createAttendance,
  getAttendances,
  getAllAttendance
};
