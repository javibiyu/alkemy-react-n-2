import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const User = ({ user }) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              color: "#fff",
              fontSize: 14,
              backgroundColor: "#1976d2",
              padding: "8px 16px",
              borderRadius: "4px",
              display: "block",
              mb: 2,
            }}
            variant="h5"
            component="h2"
            className="text-2xl font-bold mb-2"
          >
            {user.name.firstname} {user.name.lastname}
          </Typography>
          <Typography variant="body2">
            <span className="font-semibold">Email:</span> {user.email}
          </Typography>
          <Typography variant="body2">
            <span className="font-semibold">Username:</span> {user.username}
          </Typography>
          <Typography variant="body2" className="font-semibold text-gray-700">
            Dirección:
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-500 text-sm"
            sx={{ mb: 0 }}
          >
            {user.address.street} {user.address.number}, {user.address.city},{" "}
            {user.address.zipcode}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default User;
