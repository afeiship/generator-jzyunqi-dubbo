package dubbo.spring.javaconfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

/**
 * @author wiiyaya
 * @date 2018/5/3
 */
@Configuration
@ImportResource({"classpath:/service-<%= module_name %>-dubbo.xml"})
public class <%= ModuleName %>DubboConfig {

}
