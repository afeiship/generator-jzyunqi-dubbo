package cn.jzyunqi.ms.<%= module_name %>.dao.jpa.querydsl;

import cn.jzyunqi.common.utils.StringUtilPlus;
import cn.jzyunqi.ms.<%= module_name %>.domain.Q<%= DomainName %>;
import cn.jzyunqi.ms.<%= module_name %>.dto.backend.query.Bk<%= DomainName %>QueryDto;
import com.querydsl.jpa.JPQLQuery;

/**
 * @author wiiyaya
 * @date 2018/5/24.
 */
public class <%= DomainName %>Qry {

    /**
     * 会员表
     */
    private static final Q<%= DomainName %> MEMBER = Q<%= DomainName %>.member;

    public static <T> void search<%= DomainName %>(JPQLQuery<T> schQry, boolean notCountQry, Bk<%= DomainName %>QueryDto bk<%= DomainName %>QueryDto) {

        if (StringUtilPlus.isNotBlank(bk<%= DomainName %>QueryDto.getNickname())) {
            schQry.where(MEMBER.nickname.eq(bk<%= DomainName %>QueryDto.getNickname()));
        }

        if (StringUtilPlus.isNotEmpty(bk<%= DomainName %>QueryDto.getMno())) {
            schQry.where(MEMBER.mno.eq(bk<%= DomainName %>QueryDto.getMno()));
        }

        if (StringUtilPlus.isNotEmpty(bk<%= DomainName %>QueryDto.getPhone())) {
            schQry.where(MEMBER.phone.eq(bk<%= DomainName %>QueryDto.getPhone()));
        }

        if (notCountQry) {
            schQry.orderBy(MEMBER.id.desc());
        }
    }
}
