package cn.jzyunqi.ms.<%= module_name %>.dto;

import cn.jzyunqi.common.model.BaseDto;
import lombok.Getter;
import lombok.Setter;

/**
 * @author wiiyaya
 * @date <%= currentDate %>
 */
@Getter
@Setter
public class <%= DomainName %>Dto extends BaseDto<Long, Long> {
    private static final long serialVersionUID = <%= serialVersionUID() %>;
}
