package cn.jzyunqi.ms.<%= module_name %>.constant;

import cn.jzyunqi.common.helper.Cache;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author wiiyaya
 * @date 2018/5/22.
 */
@Getter
@AllArgsConstructor
public class <%= class_name %>Cache implements Cache {

    private CacheType type;

    private String Prefix;

    private long expiration;
}
