import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import com.wstutorial.rest.LogInData;
import org.apache.catalina.User;

@Path("login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginService {

    @POST
    public String postLoginData(LogInData login) throws NotAuthorizedException
    {
        if (login!=null && "brian".equals(login.getUsername()) && "kodeord".equals(login.getPassword())){
            return JWTHandler.generateJwtToken(new User(login.getUsername(), ""));
        }
        throw new NotAuthorizedException("forkert brugernavn/kodeord");
    }

    public class NotAuthorizedException extends Throwable {
        public NotAuthorizedException(String s) {
            super((s));
        }
    }


}


