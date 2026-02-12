FROM oraclelinux:9-slim

RUN set -eux; \
	groupadd --system --gid 999 mysql; \
	useradd --system --uid 999 --gid 999 --home-dir /var/lib/mysql --no-create-home mysql


ENV GOSU_VERSION 1.19
RUN set -eux; \

	arch="$(uname -m)"; \
	case "$arch" in \
		aarch64) gosuArch='arm64' ;; \
		x86_64) gosuArch='amd64' ;; \
		*) echo >&2 "error: unsupported architecture: '$arch'"; exit 1 ;; \
	esac; \
	curl -fL -o /usr/local/bin/gosu.asc "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$gosuArch.asc"; \
	curl -fL -o /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$gosuArch"; \
	export GNUPGHOME="$(mktemp -d)"; \
	gpg --batch --keyserver hkps://keys.openpgp.org --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4; \
	gpg --batch --verify /usr/local/bin/gosu.asc /usr/local/bin/gosu; \
	rm -rf "$GNUPGHOME" /usr/local/bin/gosu.asc; \
	chmod +x /usr/local/bin/gosu; \
	gosu --version; \
	gosu nobody true

RUN set -eux; \
	microdnf install -y \
		bzip2 \
		gzip \
		openssl \
		xz \
		zstd \

		findutils \
	; \
	microdnf clean all

RUN set -eux; \

	key='BCA4 3417 C3B4 85DD 128E C6D4 B7B3 B788 A8D3 785C'; \
	export GNUPGHOME="$(mktemp -d)"; \
	gpg --batch --keyserver keyserver.ubuntu.com --recv-keys "$key"; \
	gpg --batch --export --armor "$key" > /etc/pki/rpm-gpg/RPM-GPG-KEY-mysql; \
	rm -rf "$GNUPGHOME"

ENV MYSQL_MAJOR 8.0
ENV MYSQL_VERSION 8.0.45-1.el9

RUN set -eu; \
	{ \
		echo '[mysql8.0-server-minimal]'; \
		echo 'name=MySQL 8.0 Server Minimal'; \
		echo 'enabled=1'; \
		echo 'baseurl=https://repo.mysql.com/yum/mysql-8.0-community/docker/el/9/$basearch/'; \
		echo 'gpgcheck=1'; \
		echo 'gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql'; \

		echo 'module_hotfixes=true'; \
	} | tee /etc/yum.repos.d/mysql-community-minimal.repo

RUN set -eux; \
	microdnf install -y "mysql-community-server-minimal-$MYSQL_VERSION"; \
	microdnf clean all; \


	grep -F 'socket=/var/lib/mysql/mysql.sock' /etc/my.cnf; \
	sed -i 's!^socket=.*!socket=/var/run/mysqld/mysqld.sock!' /etc/my.cnf; \
	grep -F 'socket=/var/run/mysqld/mysqld.sock' /etc/my.cnf; \
	{ echo '[client]'; echo 'socket=/var/run/mysqld/mysqld.sock'; } >> /etc/my.cnf; \
	\


	! grep -F '!includedir' /etc/my.cnf; \
	{ echo; echo '!includedir /etc/mysql/conf.d/'; } >> /etc/my.cnf; \
	mkdir -p /etc/mysql/conf.d; \

	mkdir -p /var/lib/mysql /var/run/mysqld; \
	chown mysql:mysql /var/lib/mysql /var/run/mysqld; \

    chmod 1777 /var/lib/mysql /var/run/mysqld; \
	\
	mkdir /docker-entrypoint-initdb.d; \
	\
	mysqld --version; \
	mysql --version

RUN set -eu; \
	{ \
		echo '[mysql-tools-community]'; \
		echo 'name=MySQL Tools Community'; \
		echo 'baseurl=https://repo.mysql.com/yum/mysql-tools-community/el/9/$basearch/'; \
		echo 'enabled=1'; \
		echo 'gpgcheck=1'; \
		echo 'gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql'; \

        echo 'module_hotfixes=true'; \
	} | tee /etc/yum.repos.d/mysql-community-tools.repo
ENV MYSQL_SHELL_VERSION 8.0.45-1.el9
RUN set -eux; \
	microdnf install -y "mysql-shell-$MYSQL_SHELL_VERSION"; \
	microdnf clean all; \
	\
	mysqlsh --version

VOLUME /var/lib/mysql

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh # backwards compat
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 3306 33060
CMD ["mysqld"]