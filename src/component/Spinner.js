import Spinner from "react-bootstrap/Spinner";

export default function SpinnerData() {
  return (
    <div className="spinner-container-fluid position-fixed top-50 start-50 translate-middle ">
      <Spinner
        style={{
          width: "150px",
          height: "150px",
          borderWidth: "15px",
        }}
        animation="border"
        variant="primary"
      />
    </div>
  );
}
