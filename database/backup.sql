PGDMP                          w        
   DealerInfo    11.4    11.4     �
           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �
           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    16399 
   DealerInfo    DATABASE     �   CREATE DATABASE "DealerInfo" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "DealerInfo";
             postgres    false            �            1259    16436    dealer    TABLE     b   CREATE TABLE public.dealer (
    id integer NOT NULL,
    dealerid integer,
    vehicleid text
);
    DROP TABLE public.dealer;
       public         postgres    false            �            1259    16434    dealer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.dealer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.dealer_id_seq;
       public       postgres    false    197                       0    0    dealer_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.dealer_id_seq OWNED BY public.dealer.id;
            public       postgres    false    196            ~
           2604    16439 	   dealer id    DEFAULT     f   ALTER TABLE ONLY public.dealer ALTER COLUMN id SET DEFAULT nextval('public.dealer_id_seq'::regclass);
 8   ALTER TABLE public.dealer ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197            �
          0    16436    dealer 
   TABLE DATA               9   COPY public.dealer (id, dealerid, vehicleid) FROM stdin;
    public       postgres    false    197   )
                  0    0    dealer_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.dealer_id_seq', 22, true);
            public       postgres    false    196            �
           2606    16444    dealer dealer_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.dealer
    ADD CONSTRAINT dealer_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.dealer DROP CONSTRAINT dealer_pkey;
       public         postgres    false    197            �
      x�32�442"δ�"#��"�=... :��     