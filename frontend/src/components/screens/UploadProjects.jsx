const UploadProjects = () => {
  return (
    <div className="slider col-md-6 offset-md-3">
      <h2>Upload your Projects</h2>
      <form
        accept-charset="UTF-8"
        action="https://getform.io/f/{your-form-endpoint-goes-here}"
        method="POST"
        enctype="multipart/form-data"
        target="_blank"
      >
        <div className="form-group">
          <label for="projectName">Project Name</label>
          <input
            type="text"
            name="projectName"
            className="form-control"
            id="projectName"
            placeholder="Enter project name"
            required="required"
          />
        </div>
        <div className="form-group">
          <label for="projectDescrition" required="required">
            Project Description
          </label>
          <textarea
            type="text"
            name="projectDescrition"
            className="form-control"
            id="projectDescrition"
            placeholder="Enter description"
          ></textarea>
        </div>
        <hr />
        <div className="form-group mt-3">
          <label className="me-2">Upload project cover photo: </label>
          <input type="file" name="file" />
        </div>
        <hr />
        <div className="row gx-5">
          <div className="col">
            <button className="px-3 btn btn-primary">
              Preview
            </button>
          </div>
          <div className="col justify-content-end d-flex">
            <button type="submit"  className="px-3 btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UploadProjects;
