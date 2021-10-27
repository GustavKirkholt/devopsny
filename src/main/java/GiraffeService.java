import com.wstutorial.rest.Giraffe;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.Arrays;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("giraffes")
public class GiraffeService {
    List<String> giraffes = Arrays.asList("Melman", "Elmer");
    @GET
    public List<String> getGiraffes(){
        return giraffes;
    }
    @GET
    @Path("query")
    public List<Giraffe> queryGiraffes(@QueryParam("name") String name) throws NotFoundException {
        throw new NotFoundException ("No such Giraffe!");
    }


    public class NotFoundException extends Exception {
        public NotFoundException(String s) {
            super(s);
        }
    }

    public class NoImplementationException extends Exception {
        public NoImplementationException(String s) {
            super(s);
        }
    }

}
