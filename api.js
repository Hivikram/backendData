const getRequest = (model) => {
  return async (req, res) => {
    const data = await model.find();
    try {
      res.status(200).json({
        status: "success",
        message: data,
      });
    } catch (err) {
      res.status(404).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};
const uniqueuser = (model) => {
  return async (req, res) => {
    console.log(req.params.id, "id");
    const getid = req.params.id;

    const getdata = await model.findById(getid);

    try {
      if (getdata == null) {
        throw new Error(`No data to get by id ${getid}`);
      }
      res.status(200).json({
        status: "succes",
        message: getdata,
      });
    } catch (err) {
      res.status(404).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};

const postdata = (model) => {
  return async (req, res) => {
    try {
      const userdata = req.body;
      console.log(req.body);
      const create = await model.create(userdata);
      res.status(200).json({
        status: "success",
        message: "Added",
      });
    } catch (err) {
      res.status(404).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};
const deletebyid = (model) => {
  return async (req, res) => {
    const id = req.params.id;
    console.log(id);

    try {
      const deleted = await model.findByIdAndDelete(id);
      res.status(200).json({
        status: "success",
        message: deleted,
      });
    } catch (err) {
      res.status(404).json({
        status: "failure",
        message: err.message,
      });
    }
  };
};
module.exports = { getRequest, uniqueuser, postdata, deletebyid };
