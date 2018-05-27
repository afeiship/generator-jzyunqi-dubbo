package cn.jzyunqi.ms.<%= module_name %>.dto.app;

import cn.jzyunqi.ms.<%= module_name %>.dto.<%= DomainName %>Dto;
import lombok.Getter;
import lombok.Setter;

/**
 * @author wiiyaya
 * @date <%= currentDate %>
 */
@Getter
@Setter
public class App<%= DomainName %>Dto extends <%= DomainName %>Dto {
    private static final long serialVersionUID = <%= serialVersionUID() %>;
}
