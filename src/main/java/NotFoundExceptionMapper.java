import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class NotFoundExceptionMapper implements ExceptionMapper<GiraffeService.NotFoundException> {
    @Override
    public Response toResponse(GiraffeService.NotFoundException e) {
        return Response.status(Response.Status.NOT_FOUND).entity("Resource Could Not Be Found!").build();
    }
}
