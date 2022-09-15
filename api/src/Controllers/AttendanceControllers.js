const { Attendance } = require('../db.js');

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
  const { standupId, cohortId, classId, students } = req.body;
  console.log(students);
  try {
    let attendances = await students.forEach(
      async student =>
        await Attendance.findAll({
          where: {
            usersId: student.id,
          },
        })
    );

    res.json(attendances);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAttendance,
  getAttendances,
};
