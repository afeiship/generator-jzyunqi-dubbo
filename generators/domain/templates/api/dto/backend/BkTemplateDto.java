package cn.jzyunqi.ms.<%= module_name %>.dto.backend;

import cn.jzyunqi.ms.<%= module_name %>.dto.<%= DomainName %>Dto;
import lombok.Getter;
import lombok.Setter;

/**
 * @author wiiyaya
 * @date 2018/5/24.
 */
@Getter
@Setter
public class Bk<%= DomainName %>Dto extends <%= DomainName %>Dto {
    private static final long serialVersionUID = <%= serialVersionUID() %>;
}
