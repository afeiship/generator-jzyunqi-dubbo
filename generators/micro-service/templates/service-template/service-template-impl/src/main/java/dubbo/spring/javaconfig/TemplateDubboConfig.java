package dubbo.spring.javaconfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

/**
 * @author wiiyaya
 * @date <%= currentDate %>
 */
@Configuration
@ImportResource({"classpath:/service-<%= module_name %>-dubbo.xml"})
public class <%= ModuleName %>DubboConfig {

}
