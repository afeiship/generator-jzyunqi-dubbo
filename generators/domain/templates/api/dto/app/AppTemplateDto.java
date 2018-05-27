package cn.jzyunqi.ms.<%= module_name %>.dto.app;

import cn.jzyunqi.ms.<%= module_name %>.dto.<%= DomainName %>Dto;
import lombok.Getter;
import lombok.Setter;

/**
 * @author wiiyaya
 * @date 2018/5/22.
 */
@Getter
@Setter
public class App<%= DomainName %>Dto extends <%= DomainName %>Dto {
    // 生成18 位随机 + L
    private static final long serialVersionUID = 625800346486054708L;
}
