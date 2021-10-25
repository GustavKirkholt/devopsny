import dto.models.Giraffe;
import org.hibernate.Session;
import org.hibernate.cfg.Configuration;

import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Produces(MediaType.APPLICATION_JSON)
@Path("giraffes")
public class GiraffeService {
    SessionFactory sessionFactory = (SessionFactory) new Configuration().configure().buildSessionFactory();

    @GET
    public List<Giraffe> getGiraffes(){
        Session session = sessionFactory.openSession();
        CriteriaQuery<Giraffe> query = session.getCriteriaBuilder().createQuery(Giraffe.class);
        Root<Giraffe> from = query.from(Giraffe.class);
        query.select(from);
        List<Giraffe> resultList = session.createQuery(query).getResultList();
        return resultList;
    }

    @POST
    public Giraffe save(Giraffe giraffe){
        Session session = sessionFactory.openSession();
        session.save(giraffe);
        session.close();
        return giraffe;
    }


}
