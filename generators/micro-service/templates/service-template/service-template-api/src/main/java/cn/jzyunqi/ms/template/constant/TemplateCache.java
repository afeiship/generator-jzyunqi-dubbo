package cn.jzyunqi.ms.<%= module_name %>.constant;

import cn.jzyunqi.common.helper.Cache;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author wiiyaya
 * @date <%= currentDate %>
 */
@Getter
@AllArgsConstructor
public class <%= ModuleName %>Cache implements Cache {

    private CacheType type;

    private String Prefix;

    private long expiration;
}
