PGDMP     (    -                {            dbprueba    15.2    15.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                        0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16399    dbprueba    DATABASE     ~   CREATE DATABASE dbprueba WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE dbprueba;
                postgres    false            �            1259    16405    Departamento    TABLE     �   CREATE TABLE public."Departamento" (
    codigo integer NOT NULL,
    nombre character varying(100) NOT NULL,
    presupuesto double precision NOT NULL
);
 "   DROP TABLE public."Departamento";
       public         heap    postgres    false            �            1259    16400    Empleado    TABLE       CREATE TABLE public."Empleado" (
    codigo integer NOT NULL,
    nif character varying(9) NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido1 character varying(100) NOT NULL,
    apellido2 character varying(100),
    codigo_departamento integer NOT NULL
);
    DROP TABLE public."Empleado";
       public         heap    postgres    false            �          0    16405    Departamento 
   TABLE DATA           E   COPY public."Departamento" (codigo, nombre, presupuesto) FROM stdin;
    public          postgres    false    215          �          0    16400    Empleado 
   TABLE DATA           d   COPY public."Empleado" (codigo, nif, nombre, apellido1, apellido2, codigo_departamento) FROM stdin;
    public          postgres    false    214   t       k           2606    16409    Departamento pk_codigo_dep 
   CONSTRAINT     ^   ALTER TABLE ONLY public."Departamento"
    ADD CONSTRAINT pk_codigo_dep PRIMARY KEY (codigo);
 F   ALTER TABLE ONLY public."Departamento" DROP CONSTRAINT pk_codigo_dep;
       public            postgres    false    215            i           2606    16404    Empleado pk_codigo_empleado 
   CONSTRAINT     _   ALTER TABLE ONLY public."Empleado"
    ADD CONSTRAINT pk_codigo_empleado PRIMARY KEY (codigo);
 G   ALTER TABLE ONLY public."Empleado" DROP CONSTRAINT pk_codigo_empleado;
       public            postgres    false    214            l           2606    16410    Empleado fk_cod_dep    FK CONSTRAINT     �   ALTER TABLE ONLY public."Empleado"
    ADD CONSTRAINT fk_cod_dep FOREIGN KEY (codigo_departamento) REFERENCES public."Departamento"(codigo) NOT VALID;
 ?   ALTER TABLE ONLY public."Empleado" DROP CONSTRAINT fk_cod_dep;
       public          postgres    false    214    3179    215            �   O   x�3�,(*MMJ�4400�2��9��<SN�Ԃ�NCccc.#0�(75�����Ȑ�$��\R���Y����id����� ���      �   q   x�=��
�@���l	!e
�w��9��¿�)�4�535���x�P���!�`Q�x�%��7��`ޗY�$���4x,�p�%+����'����7�8>���]��� �     