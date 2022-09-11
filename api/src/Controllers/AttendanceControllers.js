const { Attendance } = require('../db.js');

const createAttendance = async (req, res, next) => {
  try {
    const { students, cohortId, classId, standupId } = req.body;
    const asist = students.forEach(async student => {
      await Attendance.create({
        attendance: true,
        usersId: student.id,
        cohortId,
        classId,
        standupId,
      });
    });
    res.json(asist);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAttendance,
};
